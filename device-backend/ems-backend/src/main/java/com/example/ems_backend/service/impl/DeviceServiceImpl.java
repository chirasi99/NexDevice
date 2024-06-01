package com.example.ems_backend.service.impl;

import com.example.ems_backend.dto.DeviceDto;
import com.example.ems_backend.entity.Device;
import com.example.ems_backend.exception.ResourceNotFoundException;
import com.example.ems_backend.mapper.DeviceMapper;
import com.example.ems_backend.repository.DeviceRepository;
import com.example.ems_backend.service.DeviceService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DeviceServiceImpl implements DeviceService {

    private DeviceRepository deviceRepository;

    @Override
    public DeviceDto createDevice(DeviceDto deviceDto) {
        Device device = DeviceMapper.mapToDevice(deviceDto);
        Device savedDevice = deviceRepository.save(device);
        return DeviceMapper.mapToDeviceDto(savedDevice);
    }

    @Override
    public DeviceDto getDeviceById(Long deviceId) {
        Device device = deviceRepository.findById(deviceId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Device is not exists with given id : " + deviceId));

        return DeviceMapper.mapToDeviceDto(device);
    }

    @Override
    public List<DeviceDto> getAllDevices() {
        List<Device> devices = deviceRepository.findAll();
        return devices.stream().map((device)-> DeviceMapper.mapToDeviceDto(device)).collect(Collectors.toList());
    }

    @Override
    public DeviceDto updateDevice(Long deviceId, DeviceDto updatedDevice) {
        Device device =  deviceRepository.findById(deviceId).orElseThrow(()-> new ResourceNotFoundException("Device is not exits with given id : " + deviceId));
        device.setName(updatedDevice.getName());
        device.setModel(updatedDevice.getModel());
        device.setStatus(updatedDevice.getStatus());
        device.setEnrolledTime(updatedDevice.getEnrolledTime());
        Device updatedDeviceObj = deviceRepository.save(device);
        return DeviceMapper.mapToDeviceDto(updatedDeviceObj);
    }

    @Override
    public DeviceDto deleteDevice(Long deviceId) {
        Device device =  deviceRepository.findById(deviceId).orElseThrow(()-> new ResourceNotFoundException("Device is not exits with given id : " + deviceId));
        deviceRepository.deleteById(deviceId);
        return null;
    }

}
