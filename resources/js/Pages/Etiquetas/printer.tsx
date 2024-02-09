import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Link,
} from "@react-pdf/renderer";
import { Head } from "@inertiajs/react";

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        color: "#3f3f3f",
        // marginLeft: '0.7cm',
        // marginTop: '1.25cm',
    },
    section: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'space-around',
        marginTop: 12,
        marginRight: 10,
        marginBottom: 15,
        marginLeft: 10,
        paddingTop: 12,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexGrow: 1,
    },
    etiqueta: {
        width: '3.10cm',
        height: '1.70cm',
        marginRight: '0.20cm',
        marginBottom: '0mm',
        // border: 1,
        // borderColor: '#f5f5f5',
        textAlign: 'center'
    },
    textmd: {
        fontSize: 12,
        marginVertical: 4,
        fontWeight: 'bold',
    },
    textxs: {
        fontSize: 8,
        paddingVertical: 2,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});

const Printer = ({ etiquetas }: any) => {
    return (
        <>
        <Head title="Etiquetas" />
               <PDFViewer style={styles.viewer}>

            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>

                    <View style={styles.section}>
                        {etiquetas.map((etiqueta: any) => (
                            <View key={etiqueta.ordem} style={styles.etiqueta}>
                                <View style={styles.textxs}>
                                    <Text>{etiqueta.empresa}</Text>
                                </View>
                                <View style={styles.textmd}>
                                    <Text>{("00000000" + (etiqueta.ordem)).slice(-8)}</Text>
                                </View>
                                <View style={styles.textxs}>
                                    <Text>{etiqueta.telefone}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </Page>
            </Document>
        </PDFViewer> 
        </>

    );
};

export default Printer;
