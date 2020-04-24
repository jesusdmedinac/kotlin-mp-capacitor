
  Pod::Spec.new do |s|
    s.name = 'KotlinMpCapacitor'
    s.version = '0.0.1'
    s.summary = 'A kotlin multi-platform capacitor plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/dmc12345628/kotlin-mp-capacitor.git'
    s.author = 'Jesús Daniel Medina Cruz'
    s.source = { :git => 'https://github.com/dmc12345628/kotlin-mp-capacitor.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end