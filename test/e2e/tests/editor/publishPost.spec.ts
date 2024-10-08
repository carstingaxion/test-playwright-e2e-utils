/**
 * WordPress dependencies
 */
const { test, expect } = require('@wordpress/e2e-test-utils-playwright');

test.describe('Publish posts in the Editor', () => {


	test('An admin should be able to publish an event.', async ({
		admin,
		editor,
		page,
		// pageUtils,
	}) => {
		// await admin.createNewPost();
		await admin.createNewPost({ postType: 'gatherpress_event' });

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title').fill('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await page.getByLabel('Add title').fill('Change title to allow saving');

		await editor.publishPost(); // this is missing the force and doesnt work.
		await page.reload();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await expect( await page.getByLabel('Add title') ).toHaveText('Change title to allow saving');
	});

	test('An admin should be able to publish a post.', async ({
		admin,
		editor,
		page,
		// pageUtils,
	}) => {
		await admin.createNewPost();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title').fill('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await page.getByLabel('Add title').fill('Change title to allow saving');

		await editor.publishPost(); // this is missing the force and doesnt work.
		await page.reload();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await expect( await page.getByLabel('Add title') ).toHaveText('Change title to allow saving');
	});


});
