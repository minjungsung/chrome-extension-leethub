# LeetHub launch material

## Community post

Title: Save accepted LeetCode solutions to your own GitHub repository

I maintain LeetHub, a Chrome extension that uploads accepted LeetCode submissions and problem descriptions to a GitHub repository you select. It retrieves the actual submitted source, supports language-based folders, and skips identical source and README files.

Connect GitHub with a fine-grained token scoped to one initialized repository, enable auto upload, and submit an accepted solution. You can also upload an older accepted submission by its ID or detail URL.

Install: https://chromewebstore.google.com/detail/igcdoidkkmchcpanpfbpcghbfldjfjfo

I am the developer. Feedback on setup and upload reliability is welcome. Please omit tokens and private code from public reports.

## Developer response draft

Thanks for reporting that only the problem description uploaded. The current version retrieves code from the actual accepted submission and writes both the source and problem README. This path was verified for Python3; it does not establish that every account and language configuration works. If the issue persists, please report your extension version, language, and popup error through the support link, without sharing your GitHub token or private code.

## Distribution

Use the demo and support guide in relevant coding-practice communities that permit developer posts. The community post and review response are prepared drafts and have not been posted.
