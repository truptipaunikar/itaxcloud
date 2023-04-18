import React from "react";

function Services() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:m-3 p-6  m-20 mt-10 mb-4">
      <div className="md:w-1/3">
        <img
          className="md:pl-32"
          src="/image\inline-feature-1.png"
          alt=""
        />
        <h3 className="text-lg md:text-xl font-semibold p-4">Store any file</h3>
        <p className="text-slate-600 text-sm md:text-base">
          Keep photos, stories, designs, drawings, recordings, <br/> videos, and more.
          Your first 15 GB of storage are free.
        </p>
        <hr className="text-slate-600 my-8 md:my-10" />
      </div>
      <div className="md:w-1/3">
        <img
          className="md:pl-32"
          src="/image\inline-feature-2.png"
          alt=""
        />
        <h3 className="text-lg md:text-xl font-semibold p-4">
          See your stuff anywhere
        </h3>
        <p className="text-slate-600 text-sm md:text-base">
          Your files in BeDrive can be reached from any <br/> smartphone, tablet, or
          computer.
        </p>
        <hr className="text-slate-600 my-8 md:my-10" />
      </div>
      <div className="md:w-1/3">
        <img
          className="md:pl-32"
          src="/image\inline-feature-3.png"
          alt=""
        />
        <h3 className="text-lg md:text-xl font-semibold p-4">
          Share files and folders
        </h3>
        <p className="text-slate-600 text-sm md:text-base">
          You can quickly invite others to view, download, and <br/> collaborate on
          all the files you want.
        </p>
        <hr className="text-slate-600 my-8 md:my-10" />
      </div>
    </div>

    // <div className='flex justify-between m-36 mt-10 mb-4'>
    //   <div>
    //     <img className='pl-32 ' src='https://cloud.itaxeasy.com/client/assets/images/homepage/inline-feature-1.png' alt=''></img>
    //   <h3 className=' text-lg font-semibold p-4'>Store any file</h3>
    //   <p className=' text-slate-600'>Keep photos, stories, designs, drawings, recordings,<br/>
    //    videos, and more. Your first 15 GB of storage are free.</p>
    //    <hr className=' text-slate-600 mt-16'/>
    //  <hr className=' text-slate-600 mt-10'/>
    //   </div>
    //   <div>
    //     <img className='pl-32' src='https://cloud.itaxeasy.com/client/assets/images/homepage/inline-feature-2.png' alt=''></img>
    //   <h3  className=' text-lg font-semibold p-4'>See your stuff anywhere</h3>
    //   <p className=' text-slate-600'>Your files in BeDrive can be reached from any <br/> smartphone, tablet, or computer.</p>
    //   <hr className=' text-slate-600 mt-16'/>
    //  <hr className=' text-slate-600 mt-10'/>
    //   </div>
    //   <div>
    //     <img className='pl-32' src='https://cloud.itaxeasy.com/client/assets/images/homepage/inline-feature-3.png' alt=''></img>
    //   <h3  className=' text-lg font-semibold p-4'>Share files and folders</h3>
    //   <p className=' text-slate-600'>You can quickly invite others to view, download, and <br/> collaborate on all the files you want.</p>
    //  <hr className=' text-slate-600 mt-16'/>
    //  <hr className=' text-slate-600 mt-10'/>
    //   </div>
    // </div>
  );
}

export default Services;
