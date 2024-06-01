package com.example.ems_backend.service;

import com.example.ems_backend.dto.DeviceDto;

import java.util.List;

public interface DeviceService {
    DeviceDto createDevice(DeviceDto deviceDto);
    DeviceDto getDeviceById(Long deviceId);
    List<DeviceDto> getAllDevices();
    DeviceDto updateDevice(Long deviceId, DeviceDto updatedDevice);
    DeviceDto deleteDevice(Long deviceId);
}
