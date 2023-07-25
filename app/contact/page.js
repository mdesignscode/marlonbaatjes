'use client';
import '@/styles/contact.scss';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        'service_0kerjni',
        'template_o4k3x7d',
        templateParams,
        '8JvwI3MlDOUR0x-Bv'
      );

      // Reset the form fields after successful submission
      reset();

      // Show success animation for 3 seconds
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      // Show error animation for 3 seconds
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  const handleOpenPdf = () => {
    const pdfUrl = '/Marlon Baatjes Front Developer Resume.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <article className="contact-page">
      <div className="email_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="top">
            {/* name and email should be row */}
            <div className="form_field">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                id="name"
                placeholder='Name'
                {...register('name', { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form_field">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                id="email"
                placeholder='Email'
                {...register('email', { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>

          {/* subject and message will be column */}
          <div className="form_field">
            {/* <label htmlFor="subject">Subject</label> */}
            <input
              type="text"
              id="subject"
              placeholder='Subject'
              {...register('subject', { required: true })}
            />
            {errors.subject && <span>This field is required</span>}
          </div>
          <div className="form_field">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              placeholder='Enter your message here...'
              {...register('message', { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit">Send</button>
        </form>
        {showSuccess && <div className="success-message">Email sent successfully!</div>}{showError && <div className="error-message">Error sending email. Please try again later.</div>}
      </div>

      <div className="external_links">
        <div className="sliding-border">
          <Link href="https://www.linkedin.com/in/marlon-baatjes-550b0b250" target='_blank'>
            <svg viewBox="0 0 24 24" width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="currentColor"></path> </g></svg>
            <p>Marlon Baatjes</p>
          </Link>
        </div>

        <div className="sliding-border">
          <Link href="https://github.com/mdesignscode" target='_blank'>
            <svg
              fill="currentColor"
              width={50}
              height={50}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <g id="5151e0c8492e5103c096af88a5006e1e">
                  <path
                    id="XMLID_1_"
                    display="inline"
                    d="M6.962,266.753c22.59-5.641,53.305-13.324,107.118-14.753 c-1.487-2.974-2.83-6.053-4.019-9.228c-20.94-0.182-85.43,2.792-107.521,8.25c-0.125,0.039-0.259,0.048-0.393,0.048 c-0.739,0-1.42-0.508-1.602-1.256c-0.211-0.873,0.326-1.774,1.208-1.995c21.89-5.41,84.825-8.413,107.118-8.355 c-5.017-14.753-7.233-31.655-7.233-50.523c0-33.516,10.437-46.159,24.46-64.02c-10.724-38.197,3.847-64.307,3.847-64.307 s22.533-4.671,65.132,25.832c23.089-9.89,84.647-10.714,113.77-2.196c17.88-11.818,50.571-28.585,63.77-23.895 c3.568,5.755,11.262,22.513,4.662,59.348c4.489,8.077,27.761,25.286,27.856,73.928c-0.384,17.938-2.245,33.084-5.698,45.899 c55.54-0.47,88.212,4.115,110.715,8.259c0.883,0.182,1.478,1.036,1.324,1.928c-0.153,0.787-0.844,1.353-1.611,1.353 c-0.115,0-0.211-0.009-0.326-0.019c-22.466-4.163-55.194-8.729-111.061-8.221c-0.979,3.252-2.072,6.341-3.262,9.286 c19.013,0.633,71.233,2.667,113.823,15.693c0.883,0.269,1.362,1.189,1.094,2.072c-0.211,0.7-0.863,1.16-1.573,1.16 c-0.153,0-0.326-0.019-0.479-0.076c-43.185-13.199-96.538-15.012-114.283-15.598c-15.444,33.929-47.118,46.59-98.322,51.856 c16.595,10.446,21.353,23.548,21.353,59.003c0,35.453-0.479,40.211-0.364,48.363c0.173,13.383,19.779,19.789,19.051,24.096 c-0.729,4.299-16.403,3.607-23.731,1.047c-20.758-7.232-18.687-24.5-18.687-24.5l-0.69-47.404c0,0,1.42-25.516-8-25.516 c0,5.131,0,59.242,0,77.592c0,16.863,11.799,21.986,11.799,28.221c0,10.715-21.563-1.016-28.202-7.703 c-10.134-10.168-8.982-31.73-8.733-48.785c0.23-16.471-0.153-52.49-0.153-52.49l-6.877,0.145c0,0,2.82,78.686-3.626,93.025 c-8.335,18.408-33.477,24.74-33.477,16.355c0-5.641,6.196-3.846,9.621-16.488c2.925-10.754,1.928-90.975,1.928-90.975 s-8.057,4.768-8.057,19.789c0,6.877-0.192,46.158-0.192,57.852c0,14.705-20.883,23.078-30.917,23.078 c-5.084,0-11.405-0.248-11.405-2.943c0-6.801,19.099-10.793,19.099-24.941c0-12.268-0.269-43.826-0.269-43.826 s-9.631,1.648-23.367,1.648c-34.628,0-45.583-22.1-50.792-34.465c-6.782-16.105-15.578-23.673-24.921-29.717 c-5.736-3.712-7.06-8.096-0.422-9.343c30.657-5.774,38.494,34.763,58.964,41.218c14.609,4.615,33.391,2.619,42.734-3.424 c1.238-12.385,10.159-23.089,17.593-28.729c-52.067-4.998-82.936-23.079-98.936-52.145c-54.466,1.305-85.372,9.036-108.029,14.695 c-1.65,0.413-3.261,0.815-4.815,1.209c-0.134,0.028-0.269,0.038-0.403,0.038c-0.739,0-1.41-0.499-1.602-1.247 c-0.221-0.882,0.326-1.784,1.209-2.005C3.72,267.567,5.322,267.175,6.962,266.753z"
                  />
                </g>
              </g>
            </svg>
            <p>Mdesignscode</p>
          </Link>
        </div>

        <div className="sliding-border">
          <span onClick={handleOpenPdf}>
            <svg
              fill="currentColor"
              width={50}
              height={50}
              viewBox="0 0 846.66 846.66"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'optimizeQuality',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <g id="Layer_x0020_1">
                  <path
                    className="fil0"
                    d="M539.75 794.68c27.15,0 27.15,41.29 0,41.29l-497.47 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -621.69c0,-5.7 2.31,-10.87 6.04,-14.6l162.3 -162.29c4.03,-4.03 9.31,-6.05 14.59,-6.05l466.89 0c11.4,0 20.65,9.25 20.65,20.65l0 361.36c0,27.16 -41.29,27.16 -41.29,0l0 -340.72 -437.7 0 -150.19 150.2 0 592.5 476.82 0zm-351.21 -181.98c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm496.57 238.25c49.84,0 90.24,40.4 90.24,90.24 0,18.1 -5.33,34.95 -14.5,49.07 37.57,24.93 61.47,66.08 64.13,111.2 1.59,27.06 -39.55,29.47 -41.13,2.42 -2.11,-35.69 -22.61,-67.48 -54.13,-84.24 -13.16,7.5 -28.38,11.78 -44.61,11.78 -17.56,0 -33.95,-5.01 -47.81,-13.69 -33.44,16.12 -55.6,49.04 -57.79,86.15 -1.59,27.05 -42.72,24.64 -41.13,-2.42 2.79,-47.18 28.75,-89.88 69.08,-114.28 -7.99,-13.47 -12.58,-29.19 -12.58,-45.99 0,-49.83 40.4,-90.24 90.23,-90.24zm0 41.29c-27.03,0 -48.94,21.92 -48.94,48.95 0,27.03 21.91,48.94 48.94,48.94 27.03,0 48.95,-21.91 48.95,-48.94 0,-27.03 -21.91,-48.95 -48.95,-48.95z"
                  />
                </g>
              </g>
            </svg>
            <p>My Resume</p>
          </span>
        </div>

        <div className="sliding-border">
          <Link href="https://wa.me/+27790226755" target='_blank'>
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              mlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={40}
              height={40}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <title>whatsapp [#128]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                        id="whatsapp-[#128]"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p>Direct Chat</p>
          </Link>
        </div>

      </div>
    </article>
  );
};

export default Contact;
