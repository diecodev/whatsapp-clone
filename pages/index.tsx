import Head from 'next/head'
import type { NextPage } from 'next'
import {Icon} from "@iconify/react";
import { AsideContainer, ChatCard, ChatCardBody, ChatCardProfile, HeaderContainer, HeaderMenu, MenuIcon, Profile } from '../lib/styled-components/aside'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WhatsApp - Clone</title>
        <meta name="description" content="WhatsApp Clone by: Dieego Díaz 😎" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AsideContainer>
        {/* user profile container */}
        <HeaderContainer>
          <Profile />
          <HeaderMenu>
              <MenuIcon>
                <Icon icon="mdi:message-text" color="currentColor" width="28" height={28} />
              </MenuIcon>
              <MenuIcon>
                <Icon icon="mdi:dots-vertical" color="currentColor" width="28" height="28" />
              </MenuIcon>
          </HeaderMenu>
        </HeaderContainer>

        {/* chats cards */}
        <ChatCard>
          <ChatCardProfile/>
          <ChatCardBody/>
        </ChatCard>
      </AsideContainer>
    </div>
  )
}

export default Home
