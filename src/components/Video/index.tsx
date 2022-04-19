import { useCallback, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { VideoType } from "../../types";

import YoutubePlayer from "react-native-youtube-iframe";

interface Props {
  data: Array<VideoType>;
}

export function Video({ data }: Props) {
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={200}
        mute={true}
        play={playing}
        videoId={data[0]?.key}
        onChangeState={onStateChange}
      />
    </View>
  );
}