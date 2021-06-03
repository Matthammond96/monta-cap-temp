import React, { useState }  from 'react'
import MontaCapitalLogo from './Monta-Capital-Logo.svg'
import emailjs from 'emailjs-com';

function Maintance() {
  const [investor, setInvestor] = useState(false)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [confirmation, setConfirmation] = useState(false)
  const [error, setError] = useState(false)

  const postForm = async (e) => {
    e.preventDefault()

    console.log(e.target)
    const checkSuccessResult = await checkSuccess();
    if (checkSuccessResult !== true) { return console.log(error) }

    const templateParams = { investor, firstName, lastName, email }
    emailjs.send('serviceId', 'template_1n7v7j2', templateParams, 'user_3DPqUbb7akqqgECWF692w')
    .then(() => {
      setError(false)
      window.location.pathname = "/Monta-Capital-Offering-Documents.pdf"
    })
  }

  const checkSuccess = async () => {
    if (!investor) { 
      setError("Please select your investor type from the above choices.")
      return false
    }

    if (!firstName) { 
      setError("Please enter your first name.")
      return false
    }

    if (!lastName) { 
      setError("Please enter your last name.")
      return false
    }

    if (!email) { 
      setError("Please enter your email address.")
      return false
    }
    
    if (!confirmation) { 
      setError("Please check the box.")
      return false
    }

    return true
  }

  return (
    <div className="Maintance-Container Self">
      <div className="Monta-Logo">
        <img className="Logo" src={MontaCapitalLogo} alt="Monta Capital"></img>
      </div>
      <div className="Monta-Capital-Title">
        <h1>Self-Certification</h1>
        <div className="Monta-Capital-Notice">
          <div className="Notice">
            <p><span className="Para-Bold">THIS OFFER IS NOT AVAILABLE TO ALL TYPES OF INVESTOR</span><br></br>FCA regulatory framework provides strict guidelines we must adhere to. Under FCA rules this investment cannot be promoted to retail investors and must only be offered to qualifying high net worth and sophisticated investors as detailed below. These products are considered ‘non readily realisable securities’, which means they are illiquid, difficult to price and do not have a secondary market. This also means they are only suitable for certain types of investor.</p>
          </div>
        </div>
      </div>
      <div className="Monta-Capital-Form">
        <form onSubmit={e => postForm(e)}>
          <p className="Para-Bold">To invest in this offer we must ascertain what type of investor you are. Please select from one of the categories below:</p>
          <div className="form-group">
            <input type="radio" name="investor" value="High Net Worth" onClick={() => setInvestor("High Net Worth")}></input>
            <label className="Para-Bold" for="investor">High Net Worth</label>
            <p className="input-description">I make this statement so that I can receive promotional communications which are exempt from the restriction on promotion of non-readily realisable securities.<br/><br/>The exemption relates to high-net-worth investors and I declare that I qualify as such because at least one of the following applies to me.<br/>i.	I had, throughout the financial year immediately preceding the date of my ticking the “high net worth investor” box, an annual income to the value of GBP100,000 or more. Annual income for these purposes does not include money withdrawn from my pension savings (except where the withdrawals are used directly for income in retirement).<br/>ii.	I held, throughout the financial year immediately preceding the date of my ticking the “high net worth investor” box, net assets to the value of GBP250,000 or more. Net assets for these purposes do not include: the property which is my primary residence or any loan secured on that property; or any rights of mine under a qualifying contract of insurance; or any benefits (in the form of pensions or otherwise) which are payable on the termination of my service or on my death or retirement and to which I am (or my dependants are), or may be, entitled; or any withdrawals from my pension savings (except where the withdrawals are used directly for income in retirement).<br/><br/>I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested.<br/><br/>I am aware that it is open to me to seek advice from someone who specialises in advising on non-readily realisable securities.</p>
          </div>

          <div className="form-group">
            <input type="radio" name="investor" value="Self-Certified Sophisticated Investor" onClick={() => setInvestor("Self-Certified Sophisticated Investor")}></input>
            <label className="Para-Bold" for="investor">Self-Certified Sophisticated Investor</label>
            <p className="input-description">I declare that I am a self-certified sophisticated investor for the purposes of the restriction on promotion of non-mainstream pooled investments. I understand this means:<br/><br />i.	I can receive promotional communications made by a person who is authorised by the Financial Conduct Authority which relate to investment activity in non-readily realisable securities; the investments to which the promotions will relate may expose me to a significant risk of losing all of the property invested.<br/><br />I am a self-certified sophisticated investor because, prior to the date of my ticking the “self-certified sophisticated investor” box, at least one of the following applies:<br/><br />i.	I am a member of a network or syndicate of business angels and have been so for at least the last six months;<br/>ii.	I have made more than one investment in an unlisted company in the last two years;<br/>I am working, or have worked during the last two years, in a professional capacity in the private equity sector, or in the provision of finance for small and medium enterprises;<br/>iii.	I am currently, or have been in the last two years, a director of a company with an annual turnover of at least GBP1 million.<br/><br />I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested.<br/><br />I am aware that it is open to me to seek advice from someone who specialises in advising on non-readily realisable securities.</p>
          </div>

          <div className="form-group">
            <input type="radio" name="investor" value="Certified Sophisticated Investor" onClick={() => setInvestor("Certified Sophisticated Investor")}></input>
            <label className="Para-Bold" for="investor">Certified Sophisticated Investor</label>
            <p className="input-description">Certified sophisticated investor statement I make this statement so that I can receive promotional communications that are exempt from the restriction on promotion of non-mainstream pooled investments (NMPIs).<br/><br />The exemption relates to certified sophisticated investors and I declare that I qualify as such for the following reasons:<br/>i.	I have a written certificate signed within the previous 36 months by a FSMA authorised firm confirming that I, the prospective investor, have been assessed by that firm as sufficiently knowledgeable to understand the risks associated with engaging in investment activity in NMPIs;<br/>ii.	Within the 12 months prior to the promotion being made to me, have signed a statement in the prescribed form confirming, among other things, that I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested and that I am aware that it is open to me to seek advice from an authorised person who specialises in advising on NMPIs. I accept that the investments to which the promotions will relate may expose me to a significant risk of losing all of the money or other property invested. I am aware that it is open to me to seek advice from an authorised person who specialises in advising on NMPIs.</p>
          </div>

          <p><span className="Para-Bold">Declaration:</span><br></br>Your details are only to record your declaration to the statement above. They will not be shared with third parties.</p>
          {error && <p className="error Para-Bold">{error}</p> }
          <label className="Para-Bold indent" for="first-name">First Name</label>
          <input type="text" name="first-name" value={firstName} placeholder="First Name"onChange={e => setFirstName(e.target.value)}></input>
          <br/><br/>

          <label className="Para-Bold indent" for="last-name">Last Name</label>
          <input type="text" name="last-name" value={lastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)}></input>
          <br/><br/>

          <label className="Para-Bold indent" for="email">Email Address</label>
          <input type="text" name="email" value={email} placeholder="Email Address" onChange={e => setEmail(e.target.value)}></input>
          <br/><br/>
        
          <input className="indent" type="radio" name="confirm" value="true" onClick={() => setConfirmation(true)}></input>
          <label className="Para-Bold" for="confirm">Check to confirm you understand the declarations above and you meet the criteria of the statement you have selected.</label>
          <br/><br/>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Maintance;
