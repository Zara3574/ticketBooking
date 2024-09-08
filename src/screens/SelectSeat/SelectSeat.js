import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';
import Arrowbackhead from '../../components/headers/HeaderwithArrowback/Arrowbackhead';
import SeatsLayout from '../../components/views/SeatLayout/SeatsLayout';


const SelectSeat = ({ navigation, route }) => {
    const { item } = route.params
    console.log(item)
    const seatTypes = {
        selected: '#FFD700', // gold
        available: '#ADD8E6', // light blue
        vip: '#4B0082', // purple
        unavailable: '#D3D3D3', // light grey
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
                {seatLegend.map((legendItem, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendColorBox, { backgroundColor: legendItem.color }]} />
                        <Text style={styles.seatslabel}>{legendItem.label}</Text>
                    </View>
                ))}
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
