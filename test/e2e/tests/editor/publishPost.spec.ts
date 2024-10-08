/**
 * WordPress dependencies
 */
const { test, expect } = require('@wordpress/e2e-test-utils-playwright');

test.describe('Publish posts in the Editor', () => {


	test('An admin should be able to publish a venue.', async ({
		admin,
		editor,
		page,
		// pageUtils,
	}) => {
		// await admin.createNewPost();
		await admin.createNewPost({ postType: 'gatherpress_venue' });

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title').fill('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await page.getByLabel('Add title').fill('Change title to allow saving gatherpress_venue');

		await editor.publishPost();
		await page.reload();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await expect( await page.getByLabel('Add title') ).toHaveText('Change title to allow saving gatherpress_venue');
	});


	test('An admin should be able to publish an Online-event.', async ({
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
		await page.getByLabel('Add title').fill('Change title to allow saving gatherpress_event');

		await page.getByLabel('Venue Selector').waitFor('attached', 30000 ); // 30sec.;
		const venueSelector = await page.getByLabel('Venue Selector');
		await expect(venueSelector).toBeVisible();

		await venueSelector.selectOption('Online event');
		await page
			.getByPlaceholder('Add link to online event')
			.fill('www.gatherpress.org');

		await editor.publishPost();
		await page.reload();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await expect( await page.getByLabel('Add title') ).toHaveText('Change title to allow saving gatherpress_event');
	});

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
		await page.getByLabel('Add title').fill('Change title to allow saving gatherpress_event');

		await editor.publishPost();
		await page.reload();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await expect( await page.getByLabel('Add title') ).toHaveText('Change title to allow saving gatherpress_event');
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

		await editor.publishPost();
		await page.reload();

		// Without GatherPress, this line of code WORKS.
		// With    GatherPress, this line of code FAILS.
		// await expect( await page.frameLocator('iframe[name="editor-canvas"]').getByLabel('Add title') ).toHaveText('Change title to allow saving');
		
		// With    GatherPress, this line of code WORKS.
		await expect( await page.getByLabel('Add title') ).toHaveText('Change title to allow saving');
	});


});
