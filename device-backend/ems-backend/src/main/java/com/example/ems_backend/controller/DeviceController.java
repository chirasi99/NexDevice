package com.example.ems_backend.controller;

import com.example.ems_backend.dto.DeviceDto;
import com.example.ems_backend.service.DeviceService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/devices")
public class DeviceController {
    private DeviceService deviceService;

    //Build Add Device REST API
    @PostMapping
    public ResponseEntity<DeviceDto> createDevice(@RequestBody DeviceDto deviceDto){
        DeviceDto savedDevice = deviceService.createDevice(deviceDto);
        return new ResponseEntity<>(savedDevice, HttpStatus.CREATED);
    }

    //Build Get Device REST API
    @GetMapping("{id}")
    public ResponseEntity<DeviceDto> getDeviceById(@PathVariable("id") Long deviceId){
        DeviceDto deviceDto = deviceService.getDeviceById(deviceId);
        return ResponseEntity.ok(deviceDto);
    }

    //Build Get All Device REST API
    @GetMapping
    public ResponseEntity<List<DeviceDto>> getAllDevices(){
        List<DeviceDto> devices =deviceService.getAllDevices();
        return ResponseEntity.ok(devices);
    }

    //Build Update Device REST API
    @PutMapping("{id}")
    public ResponseEntity<DeviceDto> updateDevice(@PathVariable("id") Long deviceId, @RequestBody DeviceDto updatedDevice){
        DeviceDto deviceDto = deviceService.updateDevice(deviceId, updatedDevice);
        return ResponseEntity.ok(deviceDto);
    }

    //Build Delete Device REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDevice(@PathVariable("id") Long deviceId){
        deviceService.deleteDevice(deviceId);
        return ResponseEntity.ok("Device deleted successfully.");
    }
}
