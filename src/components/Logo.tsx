import logoLight from "../assets/logo-light.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={logoLight} 
      alt="Accenture Infra Logo" 
      className={className}
    />
  );
}
