import React from "react";
import { styles } from "./styles";
import { Button, Text, View } from "react-native";
import { FooterProps } from "./types";

export const Footer = ({
  handlePrevious,
  previousDisabled,
  nextDisabled,
  handleNext,
  pageNumber,
}: FooterProps) => {
  return (
    <View style={styles.paginationContainer}>
      <Button
        title="Previous"
        onPress={handlePrevious}
        disabled={previousDisabled}
      />
      <Text style={styles.pageText}>Page: {pageNumber}</Text>
      <Button title="Next" onPress={handleNext} disabled={nextDisabled} />
    </View>
  );
};
