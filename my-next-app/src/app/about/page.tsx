export default function AboutPage() {
  return (
    <div >
      {/* Hero Section with Fixed Background */}
      <div className="relative h-[70vh]">
        {/* Background image layer */}
        <div className="absolute inset-0 bg-[url('/bg-img-tech.jpg')] bg-cover bg-center bg-fixed z-0" />

        {/* Optional: dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content layer */}
        <div className="relative p-10 text-white mx-9">
          <h1 className="text-4xl font-bold mt-8">About Page</h1>
          <p className="w-[20vw] mt-10">
            <b>Perfect Elektro Mek Pakistan Pvt. Limited (PEMPAK)</b> Group develops electric supplies, solutions and solar concepts that are beneficial to the environment, people, and nature.
          </p>
        </div>
      </div>

<div className="space-y-20 space-x-3 px-10 py-10 mt-13 ml-7">
      {/* Section 1: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <img src="/project-team.jpg" alt="Not found" className="h-[250px] w-[40vw] rounded-2xl" />
        <div className="w-[40vw]">
          <h1 className="font-bold text-4xl mb-6 pb-2">Company</h1>
          <p>
            <b>PERFECT ELEKTRO MEK PAKISTAN (PRIVATE) LIMITED (PEMPAK)</b><br />
            was established in the year 2000 as Distribution. A team of professionals joined hands to fulfill the market needs and challenges of the new manufacturer of complete range of LV & MV SWITCHGEARS & CONTROLGEARS for Reliable Power millennium in the corporate world. All effort made at PEMPAK are focused on perfection of the equipment and client's convenience.
          </p>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <img src="/project-team.jpg" alt="Not found" className="h-[250px] w-[40vw] rounded-2xl" />
        <div className="w-[40vw]">
          <h1 className="font-bold text-4xl mb-6 pb-2">Company</h1>
          <p>
            <b>PERFECT ELEKTRO MEK PAKISTAN (PRIVATE) LIMITED (PEMPAK)</b><br />
            was established in the year 2000 as Distribution. A team of professionals joined hands to fulfill the market needs and challenges of the new manufacturer of complete range of LV & MV SWITCHGEARS & CONTROLGEARS for Reliable Power millennium in the corporate world. All effort made at PEMPAK are focused on perfection of the equipment and client's convenience.
          </p>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <img src="/project-team.jpg" alt="Not found" className="h-[250px] w-[40vw] rounded-2xl" />
        <div className="w-[40vw]">
          <h1 className="font-bold text-4xl mb-6 pb-2">Company</h1>
          <p>
            <b>PERFECT ELEKTRO MEK PAKISTAN (PRIVATE) LIMITED (PEMPAK)</b><br />
            was established in the year 2000 as Distribution. A team of professionals joined hands to fulfill the market needs and challenges of the new manufacturer of complete range of LV & MV SWITCHGEARS & CONTROLGEARS for Reliable Power millennium in the corporate world. All effort made at PEMPAK are focused on perfection of the equipment and client's convenience.
          </p>
        </div>
      </div>

      {/* Final Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Hello</h1>
        <p className="text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus delectus laudantium debitis optio architecto cupiditate nostrum unde obcaecati perspiciatis? Modi nemo similique optio dignissimos eius exercitationem sequi molestias tempora deleniti!
        </p>
      </div>
    </div>










    </div>
  );
}
