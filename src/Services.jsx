import React from "react";
import ServiceBox from "./components/ServiceBox";

export default function Services() {


    const serviceInfo = [
        {id: 1,icon : 'M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z',title: 'Web design',text: 'Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry'},
        {id: 2,icon : 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',title: 'Mobile programming',text: 'Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry'},
        {id: 3,icon : 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5',title: 'Reservation service',text: 'Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry'},
        {id: 4,icon : 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',title: 'Business services',text: 'Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry'},
        {id: 5,icon : 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',title: 'First class support',text: 'Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry'},
        {id: 6,icon : 'M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z',title: 'Cloud technology',text: 'Lorem Ipsum is a mock text with an unintelligible simplicity produced by the printing industry'}
    ]



  return (
    <div className="my-10 py-10">
      <div className="responsive flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <span className="text-black text-opacity-70">Vista Inc</span>

          <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-black text-primary">
          software services
          </h2>

          <span className="lg:text-lg lg:w-1/2">
          Lorem Epsom is a mock text with an incomprehensible simplicity produced by the printing industry and used by graphic designers
          </span>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {serviceInfo.map(item => (
                <ServiceBox {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}
