import Navbar from "./template/header";

export default function Contact() {
    const dataContact = [
        {
          id: 1,
          full_name: "Sunny Sontirak",
          profile_image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/282764159_1269327480264463_204540611284860380_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGZVWeiT9LwJJsxdeQkWM5nPj4gK4FFZEY-PiArgUVkRrmHebpCnRqlRHI7b4vmxJVzExnQ66aQEk_IyInucr17&_nc_ohc=RAKibT2d6lgQ7kNvgFkjRvg&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&_nc_gid=AHUuMvSk-CaaZF7VUK7giV5&oh=00_AYBWLrs9Zq9b6Cy_BRsv_amXG0eQYQk7bOex-QqIs7_Scg&oe=672465F9",
          role: "Project Manager",
          email: "atit.son@rmutto.ac.th",
        },
        {
          id: 2,
          full_name: "Patipat chansritid",
          profile_image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/434325568_2414263665441273_622865762938433385_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEiyxn-KO11cNhTo6stXgAUHnQ1TGzNX_oedDVMbM1f-vGkJKXEJ7TM1Md2K67cHf1mSwDhwaZolMkScySRgZzd&_nc_ohc=UQeDc2JL0CoQ7kNvgEFZVPw&_nc_zt=23&_nc_ht=scontent.fbkk5-5.fna&_nc_gid=AkITh92MBIxkX_vTpOO0AmL&oh=00_AYCDnIw6Sp6aucB4iIXRwHAzlc2ZjUakpuhX_JrHvgjcNA&oe=672459D4",
          role: "Developer",
          email: "patipat.cha@rmutto.ac.th",
        },
        {
          id: 3,
          full_name: "Wachirawit Chotchoung",
          profile_image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/72856479_473145376608713_1415977045917171712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmtdWQsXdM3R_NYYlwpywd3Z5_9GuDYYfdnn_0a4Nhh1EMgAiDGPMMM0N1V2BWkdHs-wKgVnk97x_YAhphDgpK&_nc_ohc=uFFSB6VJdwwQ7kNvgEoYwGa&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&_nc_gid=AWpcaUq-M_dY2wOw8jXa2-T&oh=00_AYAZWISfVd0mJ8HMwq-p-uoQnGe1eBCthe_gSHTOvVBoHg&oe=6745EA25",
          role: "Tester",
          email: "wachirawit.cho@rmutto.ac.th",
        },
        {
          id: 4,
          full_name: "SakiKan Nawabut",
          profile_image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
          role: "Developer",
          email: "sasikan.naw@testdata.com",
        },
        {
          id: 5,
          full_name: "Berito Kai",
          profile_image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
          role: "Tester",
          email: "berito.kai@testdata.com",
        },
        {
          id: 6,
          full_name: "Susuki Takao",
          profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          role: "Tester",
          email: "susuki.tak@testdata.com",
        },
      ];
  return (
    <>
      <Navbar />
      <div className="p-4 pt-16 sm:ml-64">
          <div>
            <h1 className="pt-6 pl-12 pb-2 text-start text-4xl font-medium">
              Contact
            </h1>
            <div className="grid grid-cols-4 gap-4 text-center">
              {dataContact.map((data: any) => (
                <div className="justify-center">
                  <div
                    key={data.id}
                    className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a href="#">
                      <img
                        className="rounded-t-lg object-cover h-72 w-full"
                        src={data.profile_image}
                        alt=""
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {data.full_name}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {data.email}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        Read more
                        <svg
                          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}
