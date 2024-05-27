import { useEffect } from "react";
import styles from "./styles";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
interface Props {
    navigation: any;
}

export default function Home(props:Props ) {

    useEffect(
        () =>
            props.navigation.addListener("beforeRemove", (e: any) => {
                e.preventDefault();
            }),
            []
    );
    
    return (
        <SafeAreaView>
            <MapView style={styles.map}/>
        </SafeAreaView>
    );
}