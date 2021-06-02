import MontaCapitalLogo from './Monta-Capital-Logo.svg'

function Maintance() {
  return (
    <div className="Maintance-Container">
      <div className="Monta-Logo">
        <img className="Logo" src={MontaCapitalLogo} alt="Monta Capital"></img>
      </div>
      <div className="Monta-Capital-Title">
        <h1>We are currently updating some exciting new features on our website - so for a short while our main site will be under maintenance.</h1>
      </div>
      <div className="Monta-Capital-Information">
        <div className="Information">
          <p><span>Monta Capital - London</span><br />Tel: +44 207 118 1815<br />Email: info@montacapital.com<br />Address: 10 Brick Street, Mayfair, London, W1J 7DF</p>
        </div>
        <div className="Information">
          <p><span>Monta Capital - Stockholm</span><br />Tel: +44 207 118 1815<br />Email: info@montacapital.com<br />Address: Norrlandsgatan 10, 111 43, Stockholm, Sweden</p>
        </div>
      </div>
      <div className="Monta-Capital-Legal">
        <p className="Legal">Monta Capital is a group of companies. Subsidiaries of which are authorised and regulated by the Financial Conduct Authority (FCA)<br />Monta Capital PLC. Registered in England No 12618347. Registered office: 10 Brick Street, London, W1J 7DF<br />Monta Capital Management Limited Registered in England No 09396793. Registered office: 10 Brick Street, London, W1J 7DF<br/>Monta Capital Real Estate LLP (FRN:945257) is an Appointed Representative of G10 Capital Limited, which is authorised and regulated by the Financial Conduct Authority (FRN:648953)</p>
      </div>
    </div>
  );
}

export default Maintance;
