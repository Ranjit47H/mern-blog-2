import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMess, setErrorMess] = useState(null);
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      return setErrorMess("Please fill all the fields");
    }
    try {
      setLoding(true);
      setErrorMess(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMess(data.message);
      }
      setLoding(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMess(error.message);
      setLoding(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className=" font-bold  dark:text-white text-3xl">
            <span className="px-2 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-white">
              Ranjit&apos;s
            </span>
            BLOG
          </Link>
          <p className="text-sm mt-5">
            You can sign in with your email and password or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading..</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex-gap-2 text-sm mt-5">
            <span> Don&apos;t Have an Account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMess && (
            <Alert className="mt-5" color="failure">
              {errorMess}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
