import styled from 'styled-components'
import Image from 'material-ui-image'
import { Theme } from '@material-ui/core'
import { Image as ImageIcon } from '@material-ui/icons'

export const Holder = styled.div`
  max-width: 200px;
  cursor: pointer;
`

export const ImageContainer = styled('div')(
  ({ theme }: { theme: Theme }) => `
  position: relative;
  box-shadow: ${theme.shadows[1]};
`,
)

export const ScoreContainer = styled('div')(
  ({ theme }: { theme: Theme }) => `
  position: absolute;
  top: ${theme.spacing(5)}px;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: rgb(7, 6, 8, 0.8);
  padding: ${theme.spacing(0.5)}px ${theme.spacing(1)}px;
  padding-right: ${theme.spacing(1.5)}px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${theme.palette.text.secondary};
  box-shadow: ${theme.shadows[2]};
  line-height: 1;

  svg {
    display: block;
    height: 16px;
    width: 16px;
    margin-right: ${theme.spacing(0.5)}px;
  }
`,
)

export const StyledImage = styled(Image)`
  display: block;
  border-radius: 4px;
`

export const Title = styled('div')(
  ({ theme }: { theme: Theme }) => `
  margin-top: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(1)}px;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.25;
`,
)

export const Genres = styled.div`
  color: #5e6465;
  font-size: 14px;
  line-height: 1;
`

export const StyledImageIcon = styled(ImageIcon)(
  ({ theme }: { theme: Theme }) => `
  color: ${theme.palette.text.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,
)
