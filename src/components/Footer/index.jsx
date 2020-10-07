import React from 'react'

import { Footer, FooterContent } from './style'

export default function FooterPage() {
  return (
    <Footer>
      <FooterContent>
        <p className='footer-description'>
          All content & design © Pokémon Database, 2008-2020. Pokémon images & names © 1995-2020 Nintendo/Game Freak.
        </p>
        <p className='footer-privacy'>Privacy Policy</p>
      </FooterContent>
    </Footer>
  )
}
