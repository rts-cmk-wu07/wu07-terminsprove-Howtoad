Fitness verden approached me to create a web-app for their business.
The web-app includes things like pulling data from an api, a login, a search feature for classes, trainers and other things in the api. The ability to sign up for classes as a logged in user, and a few more things.

For this i've chosen to use react, as many of the things needed can be made as components and re-used elsewhere on the site.

## Dependencies

React - As explained above, i've chosen to make the project using React as it allows me to re-use components throughout the site. Greatly increasing the development speed as the project goes on. Allows for very great scalability. It also allows me to use a vast amount of libraries for the tasks i need done, once again speeding up the development by a lot and outright allowing me to make a nicer product in a time otherwise impossible.
example of component re-used for slightly different situations:

<!-- <Schedule id={data.id}>
<p className="text-[22px]">{data.classDay}</p>
<p className="ml-auto text-[22px]">{data.classTime}</p>
</Schedule>

<Schedule id={data.id}>
<p className="text-[22px]">{data.classDay}</p>
<p className="ml-auto text-[22px]">{data.classTime}</p>
</Schedule>
<Link to={`/classdetails/${data.id}`}>
<div className="border-b-2 border-dotted border-black pb-2 mb-7">
<h2 className="text-[28px]">{data.className}</h2>
</div>
</Link> -->

Axios - Used for making HTTP requests nice and simple aswell as modifying requests and response objects
example of axios being used in a post request and saving the response, in this case for the sake of getting a token and userId saved.

<!-- try {
      await loginValidation.validate({ username, password });
      const response = await axios.post("http://localhost:4000/auth/token", {
        username,
        password,
      });
      const { token, userId } = response.data;
      console.log(response.data);
      setUser({
        username,
        token,
        userId,
      });
      setIsOpen(false);
    } -->

React-router-dom - is used for the navigation throughout the project. It allows me to specify what components are loaded on what urls.
example of router in action with the routes specified and components connected to them

 <!-- <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classdetails/:id" element={<ClassDetails />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes> -->

React-Loading - A library used for showing loading animations of many kinds, used throughout the site on areas where there can occur expected load times, to show indicate to the user that something is still happening and the site hasnt just frozen.
example of loading being called, until it is eventually set to false

<!-- {isLoading ? (
        <ReactLoading type={"bars"} color={"black"} height={50} width={50} />
      ) : (
        <Slider {...settings}>
          {classes && -->

^and the useeffect for this

<!-- try {
        const res = await fetch("http://localhost:4000/api/v1/classes");
        const data = await res.json();
        setClasses(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      } -->

React-icons - A number of icons were requested throughout the design and react icons allows me to import an unending amount of them as idividual components.
Not much to talk about in regards to icons, but heres the most "complex" usage of it in this project, which shows i can quickly add modifications to the styling of it

 <!-- <HiBars3BottomRight
            className="text-slight-grey font-bold"
            size={30}
            strokeWidth={1}
          /> -->

React-Slick - A library used for the slider in "smallclass.js". Allows for a range of sliders to be used and modified on the go, very useful and easy to work with. (slick carousel is part of this)
For this i will show the slider itself, but more importantly the settings that modififies it to my specific use case.

<!-- <Slider {...settings}>
          {classes &&
            classes.map((item) => (
              <div key={item.id}>
                <img
                  src={item.asset.url}
                  className="bg-cover h-[150px] w-[150px] rounded-xl bg-center mt-10"
                  alt="cover"
                ></img>
                <div className="max-w-[110px]">
                  <p className="text-[22px] truncate mt-1">{item.className}</p>
                </div>
                <RatingClass classId={item.id}></RatingClass>
              </div>
            ))}
        </Slider> -->

and here are the settings for it

<!-- const settings = {
    infinite: false,
    slidesToShow: 2.3,
    arrows: false,
  }; -->

Yup - Yup is used for creating schema and error messages during a form validation. In this case it only gets used in the login form.
And last but not least
an example of how Yup allows me to quickly make required inputs, and add an error message when this requirement is not set. In this case we check for 2 things, strings and empty fields.

<!-- const loginValidation = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  }); -->

Deployment of site to vercel
https://wu07-terminsprove-howtoad.vercel.app/
Api on vercel
https://verceluploadapi.vercel.app/
