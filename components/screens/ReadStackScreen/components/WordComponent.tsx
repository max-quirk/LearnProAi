import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { extractPunctuation } from '../../../../utils/readings';
import { useTheme } from '../../../../contexts/ThemeContext';

type Props = {
  word: string;
  paragraphIndex: number;
  wordIndex: number;
  handleWordPress: (word: string) => void;
  isHighlighted: boolean;
};

const WordComponent: React.FC<Props> = ({ word, paragraphIndex, wordIndex, handleWordPress, isHighlighted }) => {
  const { punctuationBefore, punctuationAfter, coreWord } = extractPunctuation(word);
  const { theme } = useTheme();

  return (
    <View key={`${word}-${paragraphIndex}-${wordIndex}`} style={tw`flex-row`}>
      {punctuationBefore ? (
        <Text style={tw`text-xl leading-9 ${theme.classes.textPrimary}`}>{punctuationBefore}</Text>
      ) : null}
      <TouchableOpacity onPress={() => handleWordPress(coreWord)}>
        <Text
          style={tw`text-xl leading-9 ${
            isHighlighted ? `text-[${theme.colors.tomato}]` : theme.classes.textPrimary
          }`}
        >
          {coreWord}
        </Text>
      </TouchableOpacity>
      {punctuationAfter ? (
        <Text style={tw`text-xl leading-9 ${theme.classes.textPrimary}`}>{punctuationAfter}</Text>
      ) : null}
      <Text>{'\u00A0'}</Text>
    </View>
  );
};

export default WordComponent;
