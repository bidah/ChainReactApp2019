import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../../storybook/views"
import { SponsorLogo } from "./sponsor-logo"

storiesOf("SponsorLogo")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Platinum Sponsor" noBackground>
        <SponsorLogo size="platinum" sponsor="squarespace" />
      </UseCase>
      <UseCase text="Gold Sponsor" noBackground>
        <SponsorLogo size="gold" sponsor="gold" />
      </UseCase>
      <UseCase text="Silver Sponsor" noBackground>
        <SponsorLogo size="silver" sponsor="gold" />
      </UseCase>
      <UseCase text="Bronze Sponsor" noBackground>
        <SponsorLogo size="bronze" sponsor="gold" />
      </UseCase>
      <UseCase text="Additional Sponsor" noBackground>
        <SponsorLogo size="additional" sponsor="gold" />
      </UseCase>
    </Story>
  ))
