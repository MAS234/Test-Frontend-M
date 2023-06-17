import PropTypes from 'prop-types';


function BarraProgreso({value}) {

    const progressStyle = {
        width: `${value}%`,
        height: '10px',
        backgroundColor: '#13B497',
        borderRadius: '4px',
        transition: 'width 0.5s ease-in-out',
        margin: "10px",
        marginTop:"40px",
        boxShadow: "2px 2px 5px #13B497",

      };

      BarraProgreso.propTypes = {
        value: PropTypes.number.isRequired,
      };

  return (
    <div>
      <div style={progressStyle}></div>
    </div>
  )
}

export default BarraProgreso
