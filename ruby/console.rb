#!/usr/bin/env ruby

require(File.join('.', File.dirname(__FILE__), 'troco.rb'))
notas = Troco.new.get_qtd_notas (ARGV[0] || 0).to_f
p notas
