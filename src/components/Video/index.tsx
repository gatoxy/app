import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { VideoType } from "../../types";
import { getVideos } from "../../hooks/useFetch";
import { Loading } from "../Loading";

import YoutubePlayer from "react-native-youtube-iframe";

interface Props {
  type: string;
  id: number;
}

export function Video({ type, id }: Props) {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);

    getVideos(type, id).then(response => {
      setVideos(response);
      setLoading(false);
    });
  }, [id]);

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : (
        <YoutubePlayer
          height={216}
          mute={true}
          play={playing}
          videoId={videos[0]?.key}
          onChangeState={onStateChange}
        />
      )}
    </View>
  );
}