# react-native-global-modal
Single instance Modal in Global scope

[![Build Status](https://travis-ci.org/echoulen/react-native-global-modal.svg?branch=master)](https://travis-ci.org/echoulen/react-native-global-modal)
[![npm version](https://badge.fury.io/js/react-native-global-modal.svg)](https://badge.fury.io/js/react-native-global-modal)
[![license](https://img.shields.io/github/license/echoulen/react-native-global-modal.svg)](https://opensource.org/licenses/MIT)

### Preview
![](https://media.giphy.com/media/26FeV5yUcRuPk7Zuw/giphy.gif)


### Usage
```
import {Global} from "react-native-global-modal";

export class SomeRootView extends React.Component<Props, State> {
    render() {
        return (
            <!-- ... some else component -->
            <GlobalModal />
            <!-- ... some else component -->
        );
    }
}
```

### API
```
GlobalModal.open(renderFunction)
```

```
GlobalModal.close()
```

### Render Example
```
() => (
    <View style={styles.modalContainer}>
        <Text style={styles.modalText}>Modal 2</Text>
        <TouchableOpacity style={styles.closeButton} onPress={GlobalModal.close}>
            <Text style={styles.modalText}>✕</Text>
        </TouchableOpacity>
    </View>
)
...

const styles = {
    modalContainer: {
        width: 250,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: 10,
    },
    modalText: {
        color: "#EEEEEE",
    },
    closeButton: {
        position: "absolute",
        top: 5,
        right: 7,
    },
}
```

