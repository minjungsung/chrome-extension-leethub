import browser from 'webextension-polyfill'
export const REVIEW_URL = 'https://chromewebstore.google.com/detail/igcdoidkkmchcpanpfbpcghbfldjfjfo/reviews'
export interface ReviewPreference { firstAt: number; count: number; days: string[]; handled?: boolean }
export function eligibleReview(state?: ReviewPreference, now = Date.now()): boolean {
  return Boolean(state && !state.handled && state.count >= 5 && state.days.length >= 3 && now - state.firstAt >= 7 * 86400000)
}
export async function recordReviewUse(): Promise<void> {
  try {
    const {reviewPrompt} = await browser.storage.local.get('reviewPrompt')
    const old = reviewPrompt as ReviewPreference | undefined
    if (old?.handled) return
    const day = new Date().toISOString().slice(0, 10)
    await browser.storage.local.set({reviewPrompt: {
      firstAt: old?.firstAt ?? Date.now(), count: Math.min(100, (old?.count ?? 0) + 1),
      days: Array.from(new Set([...(old?.days ?? []), day])).slice(-30)
    }})
  } catch { /* Optional feedback must not affect a successful upload. */ }
}
