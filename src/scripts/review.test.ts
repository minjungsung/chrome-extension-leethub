import {vi} from 'vitest'
import browser from 'webextension-polyfill'
import {eligibleReview,recordReviewUse} from './review'
vi.mock('webextension-polyfill',()=>({default:{storage:{local:{get:vi.fn(),set:vi.fn()}}}}))
test('requires repeated uploads across a week and respects dismissal',()=>{
  const now=20*86400000;const ready={firstAt:0,count:5,days:['one','two','three']}
  expect(eligibleReview(ready,now)).toBe(true)
  for(const state of [undefined,{...ready,count:4},{...ready,days:['one']},{...ready,firstAt:now-86400000},{...ready,handled:true}])expect(eligibleReview(state,now)).toBe(false)
})
test('feedback storage failure does not fail a completed upload',async()=>{
  vi.mocked(browser.storage.local.get).mockRejectedValue(new Error('Storage unavailable'))
  await expect(recordReviewUse()).resolves.toBeUndefined()
})
