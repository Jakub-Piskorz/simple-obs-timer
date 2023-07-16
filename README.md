# Simple timer for OBS.

Just add Browser source and configure timer using URL params.

[Just paste it into your browser source ](https://simple-obs-timer.netlify.app/0:01:00?color=black;fontSize=60;fontWeight=600;)

![image](https://github.com/Jakub-Piskorz/simple-obs-timer/assets/54907055/2fb4c036-d9b1-4d0a-b613-9715b3f4d937)



### Examples

- `url/0:20:00` sets the timer for 20 minutes.
- `url/0:00:40` sets the timer for 40 seconds.

## Styling

- You can apply custom styles by search params, using React syntax.

### Example

- `url/0:00:40?fontSize=60` sets font-size to 60px;
- `url/0:00:40?fontSize=60;fontFamily=Times New Roman;color=black;` sets font-size to 60px, font to 'Times New Roman' and font color to black

Timer is launched every time webpage is loaded.
The easiest way to restart it, is by setting: "Refresh browser when scene becomes active" in source settins, and just make it non-visible/visible every time you want to restart the timer.
