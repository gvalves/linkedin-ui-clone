import styled, { css } from 'styled-components'

import {
  GrLinkedin,
  AiFillHome,
  AiOutlineBell,
  AiFillCaretDown,
} from 'react-icons/all'

export const Container = styled.header`
  background-color: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;

      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`

export const SearchInput = styled.input`
  margin-left: 12px;

  background-color: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;

  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background-color: var(--color-white);
  }
`

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
  flex-shrink: 0;
`

const generalIconCSS = css`
  width: 24px;
  height: 24px;
`

export const LinkdinIcon = styled(GrLinkedin)`
  width: 34px;
  height: 34px;

  color: var(--color-linkedin);
  background-color: #fff;
  border-radius: 4px;
  flex-shrink: 0;
`

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`
