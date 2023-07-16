# Simple timer for OBS.
Very simple timer for your OBS without any plugins, logins or extra installation.

Just put [one link](https://simple-obs-timer.netlify.app/0:01:00?color=purple;fontSize=60;fontWeight=600;) into the Browser source and it work.

## Getting started
- Open your OBS, and add new source named **Browser**.

![image](https://github.com/Jakub-Piskorz/simple-obs-timer/assets/54907055/46cac22e-dc26-450f-9e7b-196a0c817cbc)

- [Paste this link as URL](https://simple-obs-timer.netlify.app/0:01:00?color=black;fontSize=60;fontWeight=600;)

![image](https://github.com/Jakub-Piskorz/simple-obs-timer/assets/54907055/aceb543d-2d76-42e9-a1cf-68439bff3733)

- Be sure to select **Refresh browser when scene becomes active** in order easily restart your timer, by turning visibility on and off.

![image](https://github.com/Jakub-Piskorz/simple-obs-timer/assets/54907055/ea34e507-ba3f-4390-8924-fbac3bd01cb6)

- Want to change the time or color? [Just add some extra URL parameters](https://simple-obs-timer.netlify.app/0:01:00?color=white;fontSize=40;fontWeight=600;background=purple;borderRadius=8px;margin=5px;padding=15px;display=inline-block;boxShadow=1px%202px%205px%20rgba(0,0,0,0.2);)

## Set your timer

- [https://simple-obs-timer.netlify.app/0:20:00](https://simple-obs-timer.netlify.app/0:20:00) sets the timer for 20 minutes.
- [https://simple-obs-timer.netlify.app/0:00:40](https://simple-obs-timer.netlify.app/0:00:40) sets the timer for 40 seconds.

## Styling

You can apply custom styles by adding extra URL search params (styles have React.js CSS syntax, which is CSS but with camelCase as keys)

## Examples

- [https://simple-obs-timer.netlify.app/0:20:00?fontSize=60](https://simple-obs-timer.netlify.app/0:20:00?fontSize=60) sets the timer to 20 minutes and makes font 60 pixels height.
- [https://simple-obs-timer.netlify.app/1:00:00?fontSize=60;fontFamily=Times New Roman;color=black;](https://simple-obs-timer.netlify.app/1:00:00?fontSize=60;fontFamily=Times%20New%20Roman;color=black;) sets the timer to 1 hour and makes the font 'Times New Roman' with size 60px and black color.

## Set up your own timer
While, by default, you can use [my link](https://simple-obs-timer.netlify.app/0:20:00), you can host your own timer.

Requirements: Git, Node.js, npm.

1. Open your terminal and type `git clone https://github.com/Jakub-Piskorz/simple-obs-timer.git my-timer`
2. Open `my-timer` folder in your terminal and type `npm install`.
3. After successfull instalation, you can launch your server using `npm run dev`.
4. Follow the link from your terminal, in your browser or OBS browser source. (Be sure to add URL parameters)
