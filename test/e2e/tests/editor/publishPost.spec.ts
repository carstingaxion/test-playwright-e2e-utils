/**
 * WordPress dependencies
 */
const { test, expect } = require('@wordpress/e2e-test-utils-playwright');

test.describe('Publish posts in the Editor', () => {


	test('An admin should be able to publish a post.', async ({
		admin,
		editor,
		page,
		// pageUtils,
	}) => {
		await admin.createNewPost();
		await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title').fill('Change title to allow saving');

		await editor.publishPost(); // this is missing the force and doesnt work.
		await page.reload();

		await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
	});

});
