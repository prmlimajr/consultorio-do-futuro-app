import { StyleSheet, View } from 'react-native';

interface EmptyProps {
  width?: number;
  height?: number;
}

export function Empty({ width, height }: EmptyProps) {
  const styles = StyleSheet.create({
    container: {
      width,
      height,
    },
  });

  return <View style={styles.container} />;
}
