/*
  @author Oliver Zamora
  @description the background to the login page
*/
import {SvgImage, SvgImagePropTypes} from '../svgImage'

const BGLogin = ({title, width, height, viewBox}: SvgImagePropTypes) => (
  <SvgImage width={width} height={height} viewBox={viewBox} title={title}>
    <g>
      <image
        id='bgLogin'
        width={width}
        height={height}
      />
    </g>
  </SvgImage>
)

/*BGLogin.defaultProps = {
  height: '1258px',
  width: '1080px',
  viewBox: '0 0 1258 1080'
}*/

export default BGLogin