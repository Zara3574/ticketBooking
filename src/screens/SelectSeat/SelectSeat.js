import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';
import Arrowbackhead from '../../components/headers/HeaderwithArrowback/Arrowbackhead';
import SeatsLayout from '../../components/views/SeatLayout/SeatsLayout';


const SelectSeat = ({ navigation, route }) => {
    const { item } = route.params
    console.log(item)
    const seatTypes = {
        selected: '#FFD700',
        available: '#ADD8E6',
        vip: '#4B0082', 
        unavailable: '#D3D3D3', 
    };
    const seatLegend = [
        { label: 'Selected', color: seatTypes.selected },
        { label: 'Not Available', color: seatTypes.unavailable },
        { label: 'VIP (150$)', color: seatTypes.vip },
        { label: 'Regular (50$)', color: seatTypes.available },
    ];

    return (

        <ScrollView style={styles.container}>
            {/* Header */}
            <Arrowbackhead navigation={navigation} title={item.title} />
            {/* Screen Representation */}
            <SeatsLayout />
            {/* Seat Types Legend */}
            <View style={styles.legend}>
                <View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.selected }]} />
                        <Text style={styles.seatslabel}>Selected</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.unavailable }]} />
                        <Text style={styles.seatslabel}>Not Available</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.vip }]} />
                        <Text style={styles.seatslabel}>VIP (150$)</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: seatTypes.available }]} />
                        <Text style={styles.seatslabel}>Regular (50$)</Text>
                    </View>
                </View>

            </View>
            {/* Total Price and Proceed Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.priceView}>
                    <Text style={styles.totalPrice}>Total Price: </Text>
                    <Text style={styles.price}> $50</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.proceedButton}>
                    <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SelectSeat;
