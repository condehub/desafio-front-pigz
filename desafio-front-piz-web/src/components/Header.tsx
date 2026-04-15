import pigzLogo from '../assets/pigz-logo.svg';
import './Header.css';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={pigzLogo} alt="Pigz Logo" className="logo" />
        <button className="partner-button">Já sou parceiro</button>
      </div>
    </header>
  );
}
