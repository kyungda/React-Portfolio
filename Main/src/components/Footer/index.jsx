function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "Keung Inthachak",
      link: "https://github.com/kyungda"
    },
    
    
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
