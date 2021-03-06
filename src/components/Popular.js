var React = require('react');

class Popular extends React.Component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map(language => {
          return (<li key={language}> {language} </li>)
        })}
      </ul>
    )
  }
}

module.exports = Popular;
