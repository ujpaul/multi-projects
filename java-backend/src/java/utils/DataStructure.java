/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package utils;

import java.util.LinkedHashMap;

/**
 *
 * @author Paul
 */
public class DataStructure {
    private LinkedHashMap<Integer, UserData> hashMap = new LinkedHashMap<Integer, UserData>();
	private static final DataStructure instance = new DataStructure();
	private DataStructure() {
		
	}
	public static DataStructure getInstance() {
		return instance;
	}
	public LinkedHashMap<Integer, UserData> getData() {
		return hashMap;
	}
    
}
