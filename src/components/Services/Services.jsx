import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
       <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
        </ul>
       </article>
       {/* End of UI/UX */}

       <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>lorem thaa qaqj jqajj aa aav d

            </p>
          </li>
        </ul>
       </article>
      </div>
      </section>
  )
}

export default Services