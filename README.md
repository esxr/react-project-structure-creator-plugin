#plugin #experimental 
# React Project Structure Creator Plugin
Saves about **an hour** of your time and gives a small dopamine boost :)

___
![](/example/img1.png)

This plugin helps in writing basic boilerplate code while setting up a project hierarchy. It is especially useful when creating a project in which you know about the predefined components.

As shown in the below example:
- First **identify the components** and the sub-components
- Then create a file and **list the components** in a hierarchy
- The plugin will build your project structure and fill every component with boilerplate code that you can then modify

___
### Input
```
<TopBar/>
	<Logo/>
	<OverviewOption/>
	<ClientOption/>
	<ProcessOption/>
	<GetInTouchOP/>
	
<Landing/>
	<Overview/>
		<OverviewHeading/>
		<OverviewDescription/>
		<CallToAction/>
	<Illustration/>
```

___
### Output
![](/example/img2.png)

___
### Further improvements
- Use GPT3 to read the comments and implement code for individual components