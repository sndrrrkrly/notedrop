export const Landing = () => {
  return (
    <div className="justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl">
          {/* Lately gonna change for Logo */}
          🦄
        </h1>

        <h1 className="text-5xl text-white font-bold">
          Welcome to <strong>notedrop</strong>
        </h1>

        <p className="text-gray-400 font-normal">
          A fast note-taking app based on modern web-technologies.
        </p>
      </div>

      <div className="mt-6 flex flex-col text-center">
        <button className="py-3 mt-2 text-white hover:text-black transition duration-200 ease-in-out text-base font-normal rounded-8 bg-blue-600">
          Log In
        </button>

        <p className="mt-3 mb-3 text-gray-600 font-light">
          You don't have an account? Register.
        </p>

        <button className="py-3 mt-2 text-white hover:text-black transition duration-200 ease-in-out text-base font-normal rounded-8 bg-green-600">
          Register an Account
        </button>
      </div>
    </div>
  );
};
