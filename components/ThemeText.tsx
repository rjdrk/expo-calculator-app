import { Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface Props extends TextProps {
    variant?: 'h1' | 'h2'
}

const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (
        <Text
            {...rest}
            style={[
                { color: 'white', fontFamily: 'SpaceMono' },
                variant === 'h1' && globalStyles.mainResults,
                variant === 'h2' && globalStyles.subResult

            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {children}
        </Text>
    )
}

export default ThemeText