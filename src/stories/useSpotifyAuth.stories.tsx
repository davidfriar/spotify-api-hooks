import { useSpotifyAuth, SpotifyAuthOptions } from ".."
import { Story } from "@storybook/react"

export default {
  title: "useSpotifyAuth",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const Template: Story = () => {
  const options: SpotifyAuthOptions = {
    redirectURI: process.env.STORYBOOK_SPOTIFY_REDIRECT_URL!,
    clientId: process.env.STORYBOOK_SPOTIFY_CLIENT_ID!,
    scopes: [
      "streaming",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-top-read",
      "user-read-email",
      "user-read-private",
    ],
  }
  const { token, getToken, logout, scopes } = useSpotifyAuth(options)

  return (
    <div className="App">
      {token ? (
        <button onClick={logout}>log out</button>
      ) : (
        <button onClick={getToken}>log in</button>
      )}
      <div>{token ? token.toString() : "no token"}</div>
      {scopes?.map((scope) => (
        <div key={scope}>{scope}</div>
      ))}
    </div>
  )
}

export const Basic = Template.bind({})
