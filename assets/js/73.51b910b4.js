(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{447:function(t,o,e){"use strict";e.r(o);var a=e(26),n=Object(a.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"slack-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slack-api"}},[t._v("#")]),t._v(" Slack API")]),t._v(" "),e("h2",{attrs:{id:"connecting-slack-and-cocoom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connecting-slack-and-cocoom"}},[t._v("#")]),t._v(" Connecting Slack and Cocoom")]),t._v(" "),e("p",[t._v("The Cocoom / Slack connection provides two distinct and independent functions:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("SSO authentication")]),t._v(": using Slack to authenticate users (Users use their Slack credentials to log in to Cocoom)")]),t._v(" "),e("li",[e("strong",[t._v("Notifications")]),t._v(": use Slack to notify users of actions performed on the Cocoom platform.")])]),t._v(" "),e("h2",{attrs:{id:"step-1-create-an-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-an-app"}},[t._v("#")]),t._v(" Step 1: Create an App")]),t._v(" "),e("p",[t._v("In a web browser, go to api.slack.com")]),t._v(" "),e("p",[t._v('Once you are on this page, you need to login to your Slack "Go to Slack" space.')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588519745149_image.png",alt:"Image transférée par l’utilisateur : image.png"}})]),t._v(" "),e("p",[t._v('Once logged in, go back to https://api.slack.com and click on "Your Apps".')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588519908387_image.png",alt:""}})]),t._v(" "),e("p",[t._v("Click on “"),e("strong",[t._v("create an app")]),t._v("”")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520194007_image.png",alt:""}})]),t._v(" "),e("p",[t._v('Fill in the "App Name" field, select the appropriate "workspace", then click on "Create App"!')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520312975_image.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-2-configure-the-app-visually"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-the-app-visually"}},[t._v("#")]),t._v(" Step 2: Configure the App visually")]),t._v(" "),e("p",[t._v('In the "'),e("strong",[t._v("Basic Information")]),t._v('" section, scroll down to "'),e("strong",[t._v("Display information")]),t._v('".')]),t._v(" "),e("p",[t._v("Fill in the following information:")]),t._v(" "),e("ul",[e("li",[t._v("1- App name: Cocoom")]),t._v(" "),e("li",[t._v("2- Short description: optional description")]),t._v(" "),e("li",[t._v("3- App Icon: download the official icon here: "),e("a",{attrs:{href:"/img/big-squared-logo.png"}},[t._v("Logo")])]),t._v(" "),e("li",[t._v("4- Background color: #0F5AE5")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588520639508_image.png",alt:""}})]),t._v(" "),e("p",[t._v("Save the changes.")]),t._v(" "),e("h2",{attrs:{id:"step-3-configure-sso-slack-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-configure-sso-slack-authentication"}},[t._v("#")]),t._v(" Step 3: Configure SSO Slack Authentication")]),t._v(" "),e("p",[t._v("If and only if you wish to use Slack's user IDs to connect to your Cocoom platform. This means that when they connect to Cocoom, it is your Slack platform that will take over to authorize them to connect.")]),t._v(" "),e("p",[t._v('In the "OAuth & Permissions" section, click on "Add New Redirect URL".')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522079846_image.png",alt:""}})]),t._v(" "),e("p",[t._v("Then copy and paste the address of your Cocoom platform like this :\nhttps://YOURDOMAIN.cocoom.com/oidc")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522156994_image.png",alt:""}})]),t._v(" "),e("p",[t._v("Don't forget to back up!")]),t._v(" "),e("p",[t._v('Scroll down the OAuth & Permissions page to the "Scopes" section.')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588522387708_image.png",alt:""}})]),t._v(" "),e("p",[t._v("and add the following scopes")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588523997571_image.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-4-configure-cocoom-notifications-in-slack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-configure-cocoom-notifications-in-slack"}},[t._v("#")]),t._v(" Step 4: Configure Cocoom notifications in Slack")]),t._v(" "),e("p",[t._v("To receive Cocoom notifications directly in your Slack channels, you need to add a BOT.")]),t._v(" "),e("p",[t._v('Go to the "'),e("strong",[t._v("App Home")]),t._v('" section and go to the "'),e("strong",[t._v("You're App presence in Slack")]),t._v('" section. We\'ll start by editing the display by clicking on "'),e("strong",[t._v("edit")]),t._v('" of the app display name" and fill in the fields identically:')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588524542200_image.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-5-finalize-the-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-5-finalize-the-installation"}},[t._v("#")]),t._v(" Step 5: Finalize the installation")]),t._v(" "),e("p",[t._v('In the "'),e("strong",[t._v("Install App")]),t._v('" section, click on "'),e("strong",[t._v("Install App to Workspace")]),t._v('".')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588524771872_image.png",alt:""}})]),t._v(" "),e("p",[t._v("It's almost done! Your application is ready, we need to link it to Cocoom 🎉!")]),t._v(" "),e("h2",{attrs:{id:"step-6-send-the-slack-connection-elements-to-the-cocoom-team"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-6-send-the-slack-connection-elements-to-the-cocoom-team"}},[t._v("#")]),t._v(" Step 6: Send the Slack connection elements to the Cocoom team")]),t._v(" "),e("p",[t._v("Slack has generated connection elements to allow the Cocoom App to communicate securely with Slack. All that remains now is to send these elements to the Cocoom support address to connect them.")]),t._v(" "),e("p",[t._v("Prepare your email for support@cocoom.com and add :")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("For SSO authentication: Client ID and Secret Client :")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588525038450_image.png",alt:""}})]),t._v(" "),e("p",[e("em",[t._v("Note: You can either send these information directly in the body of the email (please append your Cocoom domain name as well, called YOURDOMAIN in this help page), or send them by filling in the following PDF document: "),e("a",{attrs:{href:"/doc/en/OpenID_Connect_Form-en.pdf"}},[t._v("OIDC Cocoom Form")])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("For the notification BOT: Bot User OAuth Access Token")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_A2EF8EA2FCB1ECA6613A9567F701E0EA766D61ACD38439000BFEADB91FC94C29_1588525457807_image.png",alt:""}})]),t._v(" "),e("p",[t._v("✌️ The support team will get back to you within several minutes to 48h maximum to validate your App!")])])}),[],!1,null,null,null);o.default=n.exports}}]);