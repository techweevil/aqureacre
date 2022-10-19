import Header from "../Header/Header";

const Contact = () => {
  return (
    <div>
      <div className="lg:px-[4rem] md:p-[3rem] p-[1rem] ">
        <Header />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[2em]">
          <div className="font-[800]  border border-blue-900 ">
            <p className="p-8 bg-blue-900 md:text-[3em] text-[2em] text-white mb-[10px] ">
              Contact Us
            </p>
            <p className="p-4 md:text-[20px] text-[16px]">
              Our fleet management services can help you optimize your
              operation, reduce lifcost, and keep your business moving.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900  text-white font-[800] md:p-[3em] p-[1em] rounded-tr-[2em]">
            <p className="md:text-[3em] text-[2em] ">Global Headquater</p>
            <p className="md:text-[20px]  ">
              25 Weardale House Woodberry Down Estate, <br /> Manor House,
              London N4 1QN{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-[4rem] md:p-[3rem] mb-[2em]">
        <div className="  flex items-center justify-center">
          <div className="bg-blue-900 md:w-[60%] w-[90%] p-4 rounded-[2em] flex flex-col items-center ">
            <form
              action=""
              className="flex flex-col gap-6 md:px-[4em] md:py-[6em] py-[2em] w-full"
            >
              <div className="flex flex-col gap-1  ">
                <label
                  className="font-[700] text-white md:placeholder:text-[20px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="rounded-r-[.6em] px-6 py-2 text-[18px] focus:border-none  w-full "
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col gap-1  ">
                <label
                  className="font-[700] text-white md:text-[20px]"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  className="rounded-r-[.6em] px-6 py-2 text-[18px] focus:border-none  w-full "
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                />
              </div>

              <button className="w-full text-[18px] text-white bg-blue-500 rounded-xl py-2 hover:bg-blue-700 ">
                Submit
              </button>
            </form>

            <div className="flex  md:flex-row flex-col text-white font-[700] gap-4">
              <a href="https://www.thesquareacre.com" >
                {" "}
                www.thesquareacre.com{" "}
              </a>
              <a href="https://contact@thesquareacre.com">Contact@thesquareacre.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
