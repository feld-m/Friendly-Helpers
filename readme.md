# Adobe Launch Extension: Friendly Helpers

This extension is aimed to extend the Adobe Launch Interface with useful features, which it does not provide out
of the box.

## Features
### Synchronous Code
Code entered into the **Custom Code** Action of the **Core** extension by Adobe is either bundled
directly into the launch library filed, or loaded as a seperate file.
This depends on the type of action involved.
There are times, such as e.g. click listeners, where you absolutely want your custom code to be run
immediately.
The **Synchronous Code** Action type provided by this extension lets you write JS code which is directly
bundled into the launch library and can thus run immediately when the rule is triggered. Always. No asynchronicity involved. 

## Making this extension available for your organization
As of right now this extension is not released publically. This means you cannot directly add it to your launch property. Rather you need to release it by yourself.

These are the required steps:
- clone this repository
- `cd` into the repository
- in the `extension.json` change the property `name` to something unique (e.g. by adding your company prefix). The global(!) unique-ness of the name is a requirement by Adobe Launch.
- run `npx @adobe/reactor-packager`
- get access to the adobe launch API -  see:
    - https://developer.adobelaunch.com/api/guides/access_tokens/
    - https://experienceleague.adobe.com/docs/launch/using/extension-dev/submit/access.html?lang=en#extension-dev
    - these will be required in the next steps
- upload the extension to your organization
  - see https://github.com/adobe/reactor-uploader
  - `npx @adobe/reactor-uploader package-myextension-1.0.0.zip --private-key=/Users/jane/launchkeys/reactor_integration_private.key --org-id=01C20D883A7D42080A494212@AdobeOrg --tech-account-id=14A533A72B181CF90A44410D@techacct.adobe.com --api-key=192ce541b1144160941a83vb74e0e74d --client-secret=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
  - your extension is now available in launch for properties which are explicitly configured for extension development (see: https://experienceleague.adobe.com/docs/launch/using/admin/companies-and-properties.html?lang=en#create-or-configure-a-property > configure for extension development checkbox)
- release the extension in your organization: 
  - see https://github.com/adobe/reactor-releaser
  - `npx @adobe/reactor-releaser --private-key=/Users/jane/launchkeys/reactor_integration_private.key --org-id=01C20D883A7D42080A494212@AdobeOrg --tech-account-id=14A533A72B181CF90A44410D@techacct.adobe.com --api-key=192ce541b1144160941a83vb74e0e74d --client-secret=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
  - your extension is now available for all launch properties within your organization (private release)


## SideNote: Styling Views (css)
Adobe Launch uses https://github.com/adobe/coral-spectrum
An easy way to get your extension to look like its part of the Adobe Launch Interface is to include the following in the `<head>` of your extension views.
```css
  <!-- STYLING SEE https://github.com/adobe/coral-spectrum -->
  <link rel="stylesheet" href="https://unpkg.com/@adobe/coral-spectrum@4.x.x/dist/css/coral.min.css">
  <script src="https://unpkg.com/@adobe/coral-spectrum@4.x.x/dist/js/coral.min.js"
    data-coral-icons-external="js"></script>
```
Or you can see how its used in this extension by extracting the files as detailed here:
- https://github.com/adobe/coral-spectrum > section: "Copying the distribution files"
- refer to the `src/views/*/*.html` and `src/style`
