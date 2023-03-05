import PropTypes from 'prop-types';



export function MarginV({ height }) {
    return (
        <div style={{
            paddingTop: height,
        }}>
        </div>
    )
}
MarginV.propTypes = {
    height: PropTypes.number.isRequired,
}



export function MarginH({ width }) {
    return (
        <div style={{
            paddingLeft: width,
        }}>
        </div>
    )
}
MarginH.propTypes = {
    width: PropTypes.number.isRequired,
}



