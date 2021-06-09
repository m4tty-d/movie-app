import React from 'react'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import styled from 'styled-components'
import { Dialog, DialogContent, Slide, Theme, withStyles } from '@material-ui/core'
import { Close } from '@material-ui/icons'

export const Transition = React.forwardRef(function Transition(
  // eslint-disable-next-line
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const StyledDialog = withStyles((theme) => ({
  paper: {
    background: theme.palette.primary.main,
  },
}))(Dialog)

export const StyledDialogContent = withStyles((theme) => ({
  root: {
    padding: '40px',
    paddingTop: '36px',
    width: 600,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))(DialogContent)

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
`

export const Infos = styled('div')(
  ({ theme }: { theme: Theme }) => `
  font-size: 12px;
  color: ${theme.palette.text.secondary};
  display: flex;
  margin: 14px 0;
  display: flex;
  align-items: center;

  div {
    display: flex;

    &:after {
      content: '|';
      margin-left: 8px;
      margin-right: 8px;
    }

    &:last-child:after {
      content: none;
    }
  }
`,
)

export const Extract = styled('div')(
  ({ theme }: { theme: Theme }) => `
  font-size: 14px;
  color: ${theme.palette.text.secondary};
  line-height: 1.75;
`,
)

export const ImageContainer = styled.div`
  position: relative;
`

export const ModalCloseIcon = styled(Close)(
  () => `
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`,
)

export const ImdbLogo = styled.img`
  height: 16px;
  width: auto;
  /* position: absolute; */
  /* bottom: 10px; */
  /* left: 40px; */
`
