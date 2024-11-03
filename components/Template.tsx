interface EmailTemplateProps {
    name: string;
    password: string;
  }
  
  const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    password,
  }) => (
    <div>
      <h1>Ny innsending av skjema på din nettside</h1>
      <p>Her er infoen de ga:</p>
      <p>Navn: {name}</p>
      <p>Flagg: {password}</p>
    </div>
  );
  
  export default EmailTemplate;
  